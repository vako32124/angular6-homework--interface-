
export interface Student {
    name: string;
    age: number | null;
    grade: string;
    subjects: string;
    isEnrolled: boolean;
    address: {
        street: string;
        city: string;
        zip: string;
    };
}
