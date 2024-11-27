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

export interface Member {
  name: string;
  nim: string;
  profile?: string;
}

export interface Model {
  evaluate:      Evaluate;
  lib_info:      LIBInfo;
  model_compile: ModelCompile;
  model_config:  ModelConfig;
}

export interface Evaluate {
  accuracy:   number;
  con_matrix: ConMatrix;
  precision:  number;
  recall:     number;
}

export interface ConMatrix {
  fn: number;
  fp: number;
  tn: number;
  tp: number;
}

export interface LIBInfo {
  description: string;
  logo:        string;
  name:        string;
  source:      string;
}

export interface ModelCompile {
  jit_compile:         null;
  loss:                string;
  loss_weights:        null;
  metrics:             string[];
  optimizer:           string;
  run_eagerly:         null;
  steps_per_execution: null;
  weighted_metrics:    null;
}

export interface ModelConfig {
  layers: Layer[];
  name:   string;
}

export interface Layer {
  class_name:      string;
  config:          LayerConfig;
  module:          string;
  registered_name: null;
  build_config?:   BuildConfig;
}

export interface BuildConfig {
  input_shape: Array<number | null>;
}

export interface LayerConfig {
  batch_input_shape?:    Array<number | null>;
  dtype:                 string;
  name:                  string;
  ragged?:               boolean;
  sparse?:               boolean;
  activation?:           string;
  activity_regularizer?: null;
  bias_constraint?:      null;
  bias_initializer?:     BiasInitializer;
  bias_regularizer?:     null;
  kernel_constraint?:    null;
  kernel_initializer?:   KernelInitializer;
  kernel_regularizer?:   null;
  trainable?:            boolean;
  units?:                number;
  use_bias?:             boolean;
}

export interface BiasInitializer {
  class_name:      string;
  config:          BiasInitializerConfig;
  module:          string;
  registered_name: null;
}

export interface BiasInitializerConfig {
}

export interface KernelInitializer {
  class_name:      string;
  config:          KernelInitializerConfig;
  module:          string;
  registered_name: null;
}

export interface KernelInitializerConfig {
  seed: null;
}
