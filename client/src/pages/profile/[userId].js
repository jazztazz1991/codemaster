import Layout from "@/components/layout/layout"
import { UploadButton } from "../../lib/uploadthing";
import React from "react";
import AvatarEditor from 'react-avatar-editor';
import { useImageContext } from "../../components/imageContext";
import Image from "next/image"
import {
    CardDescription,
    CardTitle,
} from "@/components/ui/card"
import GenStats from "@/components/profile/genStats";

export default function Profile({ userProfile }) {

    const userId = userProfile.userId;

    const { userImages, imageUploader } = useImageContext();
    const uploadedImage = userImages[userId];
    // console.log("uploaded image:",uploadedImage)
    // console.log("user images:",userImages)

    return (
        <Layout>
            <div className="container mx-auto pt-28 cGradient">
                <div className="grid grid-cols-2 gap-8">

                    <div className="flex flex-col items-center p-14 rounded-xl bg-white shadow-xl h-min">

                        <CardTitle className="mb-8"> Account Settings </CardTitle>


                        <CardDescription className="font-medium"> {userProfile.username} </CardDescription>


                        {uploadedImage ? (
                            <AvatarEditor
                                image={uploadedImage}
                                width={200}
                                height={200}
                                border={50}
                                color={[255, 255, 255]}
                                scale={1}
                                borderRadius={125}
                            />

                        ) : (
                            <Image
                                src="/default_pfp.jpg"
                                alt="default image"
                                width={200}
                                height={200}
                                className="mb-10 mt-8"
                                draggable="false"
                            />

                        )}

                        <UploadButton
                            appearance={{
                                button: {
                                    borderRadius: "10px",
                                    padding: "22px",
                                    fontSize: "0.9rem",
                                    fontWeight: "600"
                                }
                            }}
                            endpoint="imageUploader"
                            onClientUploadComplete={(res) => imageUploader(userId, res)}
                            onUploadError={(error) => {
                                console.log(`${error.message}`);
                            }}
                        />

                    </div>
                    <div>
                        <GenStats />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    try {
        const userId = context.params.userId;

        const res = await fetch(`http://localhost:3001/auth/profile/${userId}`);
        const userProfile = await res.json()
        // console.log(userProfile)

        return { props: { userProfile } }
    } catch (error) {
        console.log(error)
    }

}
