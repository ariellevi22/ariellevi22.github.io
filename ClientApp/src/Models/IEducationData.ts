export default interface IEducationData {
    id: number,
    school: string,
    location: string,
    degree: string,
    majors?: string[],
    minors?: string[],
    startDate: string,
    endDate: string,
    classes: string[],
    additionalInfo?: {heading: string, text: string}[],
    photo: string,
    logo: string,
}