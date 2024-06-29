export interface Position {
    id: string;
    name: string;
    level: string;
    description: string;
    startDate: Date;
    endDate: Date;
  }
  
  export interface Job {
    id: string;
    companyName: string;
    companyWebsite: string;
    companyDescription: string;
    positions: Position[];
  }
  