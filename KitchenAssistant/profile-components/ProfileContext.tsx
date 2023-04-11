import { ReactNode, createContext, useState } from "react";

interface ProfileContextType {
    height: string;
    setHeight: (height: string) => void;
    weight: string;
    setWeight: (weight: string) => void;
    age: string;
    setAge: (age: string) => void;
    gender: string;
    setGender: (gender: string) => void;
    numPeople: string;
    setNumPeople: (numPeople: string) => void;
    diets: string[];
    setDiets: (diets: string[]) => void;
    additionalInfo: string;
    setAdditionalInfo: (additionalInfo: string) => void;
}

interface Props {
    children: ReactNode;
}
  

export const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider = ({ children }: Props) => {
    const [height, setHeight] = useState<string>("");
    const [cmHeight, setCmHeight] = useState<string>("");
    const [weight, setWeight] = useState<string>("");
    const [age, setAge] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [numPeople, setNumPeople] = useState<string>("");
    const [diets, setDiets] = useState<string[]>([]);
    const [additionalInfo, setAdditionalInfo] = useState<string>("");

    return (
        <ProfileContext.Provider value = {{
            height, 
            setHeight,
            weight,
            setWeight,
            age,
            setAge,
            gender, 
            setGender,
            numPeople,
            setNumPeople,
            diets,
            setDiets,
            additionalInfo,
            setAdditionalInfo
        }}>
            {children}
        </ProfileContext.Provider>
    )
}