interface Address {
  premises: string;
  postal_code: string;
  country: string;
  locality: string;
  address_line_1: string;
}

interface Links {
  self: string;
}

interface Matches {
  title: number[];
}

export interface Company {
  company_status: string;
  address_snippet: string;
  date_of_creation: string;
  matches: Matches;
  description: string;
  links: Links;
  company_number: string;
  title: string;
  company_type: string;
  address: Address;
  kind: string;
  description_identifier: string[];
}

export type Officer = {
  address: {
      postal_code: string;
      locality: string;
      region: string;
      address_line_1: string;
  };
  name: string;
  appointed_on: string;
  officer_role: string;
  links: {
      officer: {
          appointments: string;
      };
  };
  nationality: string;
};
