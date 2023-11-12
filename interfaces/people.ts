export interface People {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    url: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    [key: string]: string | number;
}
