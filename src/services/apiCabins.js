
import supabase, { supabaseUrl } from "./supabase";

export async function  getCabins() {
   const { data, error } = await supabase
     .from('cabins')
     .select('*')
   
if(error)
{
    console.error(error);
    throw new Error("Cabin could not be loaded")
}

     return data;
}


export async function createEditCabin(newCabin, id) {
     console.log(id)
     console.log(newCabin)
const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl)
// https://jnyumtavqjuqlgpqushg.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg?t=2024-07-30T08%3A19%3A22.117Z
// 1.Create cabin
const imageName = `${Math.random()}-${newCabin.image.name}`.replace("/", "")
const imagePath = hasImagePath ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

// Create Edit Cabin
let query = supabase.from('cabins');
// A. Create Cabin
if(!id) query = query.insert([{ ...newCabin, image: imagePath}])

// B. Edit Cabin
if(id) 
     query = query.update({ ...newCabin, image: imagePath})
     .eq('id', id)


const { data, error } = await query.select();

if(error)
     {
     console.error(error);
     throw new Error("Cabin could not be deleted")
     }

     // 2. upload Image
     const {  error: storageError } = await supabase
     .storage
     .from('cabin-images')
     .upload(imageName, newCabin.image)


     // 3. Deleting cabon if there is error in uplaoding image
     if(storageError) {
          await supabase.from('cabins').delete().eq('id', data.id)
          console.error(storageError);
          throw new Error("Image could not be Uploaded and Cabin could not be created")
     }
     return data;
}

export async function deleteCabin(id) {
     
const {data, error } = await supabase
.from('cabins')
.delete()
.eq('id', id)
if(error)
     {
     console.error(error);
     throw new Error("Cabin could not be deleted")
     }
     
     return data;
}