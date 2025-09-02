export interface Task {
  _id: string;
  description: string;
  completed: boolean;
}

export interface Profile {
  name: string;
  email: string;
  phoneNumber: string;
  linkedInProfile: string;
  imageId: any;
}
