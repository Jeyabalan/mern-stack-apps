export interface Task {
  _id: string;
  description: string;
  completed: boolean;
}

export interface Profile {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  linkedInProfile: string;
  imageId: any;
}
