
// Import React to resolve namespace 'React' errors in .ts files
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  details: string[];
  icon?: React.ReactNode;
}

export interface ImageEditorState {
  originalImage: string | null;
  editedImage: string | null;
  loading: boolean;
  error: string | null;
  prompt: string;
}
