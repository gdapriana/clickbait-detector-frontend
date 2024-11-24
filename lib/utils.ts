import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface DatasetSchema {
  dataset:          Dataset[];
  dataset_link:     string;
  dataset_subtitle: string;
  dataset_title:    string;
  false_label:      number;
  taken_dataset:    number;
  total_dataset:    number;
  true_label:       number;
}

export interface Dataset {
  clickbait: number;
  headline:  string;
}

