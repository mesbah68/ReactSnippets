export type MessageItems = {
  text: any;
  messages: any;
  user:
    {
    id: string,
    name?: string
    }
  ;
  message: {
    id: string,
    text: string,
  };
};

export type UserItems = {
  id: string;
  name?: string;
};
