import React, { useCallback } from 'react';
import { UploadIcon, TrashIcon } from './IconComponents';

interface IngredientInputProps {
  imageFiles: File[];
  setImageFiles: React.Dispatch<React.SetStateAction<File[]>>;
  textIngredients: string;
  setTextIngredients: React.Dispatch<React.SetStateAction<string>>;
  onGenerate: () => void;
}

export const IngredientInput: React.FC<IngredientInputProps> = ({
  imageFiles,
  setImageFiles,
  textIngredients,
  setTextIngredients,
  onGenerate,
}) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files);
      setImageFiles(prevFiles => [...prevFiles, ...newFiles].slice(0, 5)); // Limit to 5 images
    }
  };

  const handleDrop = useCallback((event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files) {
      // FIX: Explicitly type `file` as `File` to resolve TypeScript error.
      const newFiles = Array.from(event.dataTransfer.files).filter((file: File) => file.type.startsWith('image/'));
      setImageFiles(prevFiles => [...prevFiles, ...newFiles].slice(0, 5));
    }
  }, [setImageFiles]);

  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const removeImage = (index: number) => {
    setImageFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-surface p-6 md:p-8 rounded-2xl shadow-lg max-w-4xl mx-auto animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-text-primary mb-2">What's in your kitchen?</h2>
      <p className="text-center text-text-secondary mb-6">Upload photos or list your ingredients below.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Image Upload */}
        <div className="flex flex-col gap-4">
          <label 
            htmlFor="file-upload" 
            className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-primary transition-colors"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <UploadIcon className="mx-auto h-12 w-12 text-gray-400" />
            <span className="mt-2 block text-sm font-medium text-text-primary">
              Drop images here or <span className="text-primary">click to browse</span>
            </span>
            <span className="mt-1 block text-xs text-text-secondary">PNG, JPG, GIF up to 10MB each. Max 5 images.</span>
            <input id="file-upload" type="file" multiple accept="image/*" className="sr-only" onChange={handleFileChange} />
          </label>
          {imageFiles.length > 0 && (
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {imageFiles.map((file, index) => (
                <div key={index} className="relative group">
                  <img src={URL.createObjectURL(file)} alt={`ingredient ${index + 1}`} className="w-full h-20 object-cover rounded-md" />
                  <button onClick={() => removeImage(index)} className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <TrashIcon className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Text Input */}
        <div className="flex flex-col gap-4">
          <textarea
            value={textIngredients}
            onChange={(e) => setTextIngredients(e.target.value)}
            placeholder="Or type your ingredients here, separated by commas...&#10;e.g., chicken breast, rice, broccoli"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow min-h-[148px] text-sm"
            rows={5}
          />
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <button
          onClick={onGenerate}
          className="bg-primary text-white font-bold py-3 px-12 rounded-full hover:bg-primary-dark transition-transform transform hover:scale-105 shadow-lg text-lg disabled:bg-gray-400 disabled:cursor-not-allowed disabled:scale-100"
          disabled={imageFiles.length === 0 && textIngredients.trim() === ''}
        >
          Find Recipes
        </button>
      </div>
    </div>
  );
};
