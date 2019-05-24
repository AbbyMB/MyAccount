export class Profile {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  placeOfWork: string;
  suffix: string;
  professionalCategory: string;
  dateOfBirth: Date;

  constructor(id: number, firstName: string, lastName: string, email: string, country: string, placeOfWork: string, suffix: string, professionalCategory: string, dateOfBirth: Date) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.country = country;
    this.placeOfWork = placeOfWork;
    this.suffix = suffix;
    this.professionalCategory = professionalCategory;
    this.dateOfBirth = dateOfBirth;
  }
}
