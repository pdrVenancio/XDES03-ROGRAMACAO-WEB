import Dado from "./Dado";

export default function Rolagem({face_1 = 6, face_2 = 6, face_3 = 6}){
    return(
        <>
            <Dado num_faces={face_1}/>
            <Dado num_faces={face_2}/>
            <Dado num_faces={face_3}/>
        </>
    )
}