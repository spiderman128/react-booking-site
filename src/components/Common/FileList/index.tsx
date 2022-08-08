// Dependencies
import React, { FC, useRef } from 'react';
import { Box } from '@mui/material';

import { Icon } from '../Icon';
import { Typography } from '../Typography';
import * as S from './styles';
import { lightIndigo } from '../../../theme/palette';

interface IFileList {
  files: any[];
  onChangeFiles: (values: File[]) => void;
}

// Export fileList component
export const FileList: FC<IFileList> = ({ files, onChangeFiles }) => {
  const fileSelector = useRef<any>();

  const handleAddFileClick = () => {
    fileSelector.current.click();
  };

  const handleAddFile = (e) => {
    const { files: uploadedFiles } = e.target;
    if (uploadedFiles && uploadedFiles.length > 0) {
      onChangeFiles([...files, ...uploadedFiles]);
    }
  };

  const handleRemoveFile = (index: number) => {
    onChangeFiles(files.filter((photo, idx) => idx !== index));
  };

  return (
    <S.FileList sx={{ mt: files.length > 0 ? 28 : 0 }}>
      {files.map((file, index) => (
        <S.FileItem direction="row" alignItems="center" spacing={8}>
          <Icon name="document" color={lightIndigo} />
          <Box display="flex" flexDirection="column">
            <Typography variant="caption">{file.name}</Typography>
            <Typography variant="caption">{`${(file.size / 1024).toFixed(
              0
            )}kb`}</Typography>
          </Box>
          <S.RemoveButton onClick={() => handleRemoveFile(index)}>
            <Icon name="trash" />
          </S.RemoveButton>
        </S.FileItem>
      ))}
      <S.SelectFileButton onClick={handleAddFileClick}>
        Select Files
      </S.SelectFileButton>
      <input
        style={{ display: 'none' }}
        type="file"
        ref={fileSelector}
        onChange={handleAddFile}
        multiple
      />
    </S.FileList>
  );
};
