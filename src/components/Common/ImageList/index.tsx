// Dependencies
import React, { FC, useRef } from 'react';

import { Icon } from '../Icon';
import * as S from './styles';

interface IImageListProps {
  files: any[];
  onRemoveFile?: (index: number) => void;
  onChangeFiles?: (values: File[]) => void;
  hasAddImageButton?: boolean;
}

// Export ImageList component
export const ImageList: FC<IImageListProps> = ({
  files,
  onRemoveFile,
  onChangeFiles,
  hasAddImageButton,
}) => {
  const fileSelector = useRef<any>();

  const handleAddFileClick = () => {
    fileSelector.current.click();
  };

  const handleAddFile = (e) => {
    const { files: uploadedFiles } = e.target;
    if (uploadedFiles && uploadedFiles.length > 0) {
      onChangeFiles && onChangeFiles([...files, ...uploadedFiles]);
    }
  };

  const handleRemoveFile = (index: number) => {
    if (onChangeFiles) {
      onChangeFiles(files.filter((photo, idx) => idx !== index));
    } else if (onRemoveFile) {
      onRemoveFile(index);
    }
  };

  return (
    <S.ImageList sx={{ mt: files.length > 0 ? 28 : 0 }}>
      {files.map((image, index) => (
        <S.ImageItem key={index}>
          <img src={URL.createObjectURL(image)} alt="news" />
          <S.RemoveButton onClick={() => handleRemoveFile(index)}>
            <Icon name="trash" />
          </S.RemoveButton>
        </S.ImageItem>
      ))}
      {hasAddImageButton && (
        <>
          <S.AddImageButton onClick={handleAddFileClick}>
            <Icon name="plus-lg" />
          </S.AddImageButton>
          <input
            style={{ display: 'none' }}
            type="file"
            ref={fileSelector}
            onChange={handleAddFile}
            multiple
          />
        </>
      )}
    </S.ImageList>
  );
};
