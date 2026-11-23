export interface InquiryFormData {
  name: string
  email: string
  organization: string
  interestedIn: string
  goals: string
}

export interface InquiryRecord extends InquiryFormData {
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export interface InquiriesPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface InquiriesApiResponse {
  success: boolean;
  data: InquiryRecord[];
  pagination: InquiriesPagination;
  message?: string;
}
