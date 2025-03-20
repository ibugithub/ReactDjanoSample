interface User {
  email: string;
}
export interface ProfileInterface {
  user: User;
  Display_name: string | null;
  profile_picture: string | null;
  created_at: string; 
  updated_at: string;
}