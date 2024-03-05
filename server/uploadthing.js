import { createUploadthing } from "uploadthing/next-legacy";

const f = createUploadthing();
 
export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })


    .onUploadComplete(async ({ metadata, file }) => {

    console.log("Upload complete for userId:", metadata.userId);
    console.log("file url", file.url); 
    //   // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
    //   return { uploadedBy: metadata.userId };
    }),
}
 