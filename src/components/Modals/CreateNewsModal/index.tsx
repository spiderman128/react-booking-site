// Dependencies
import React, { FC, useRef, useState } from 'react';
import { Typography } from '@mui/material';

import { Dialog } from '../../Common';
import { Button, Icon, IconButton, Input } from '../../Common';
import * as S from './styles';
import { ImageList } from '../../Common/ImageList';

interface ICreateNewsModalProps {
  open: boolean;
  onClose: () => void;
}

export const CreateNewsModal: FC<ICreateNewsModalProps> = ({
  open,
  onClose,
}) => {
  const [title, setTitle] = useState<string>('');
  const [news, setNews] = useState<string>('');
  const [files, setFiles] = useState<any[]>([]);

  const fileSelector = useRef<any>();

  const handleCreateNews = () => {
    onClose();
  };

  const handleChangeNews = (e) => {
    setNews(e.target.value);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAddFileClick = () => {
    fileSelector.current.click();
  };

  const handleAddFile = (e) => {
    const { files: uploadedFiles } = e.target;
    if (uploadedFiles && uploadedFiles.length > 0) {
      setFiles([...files, ...uploadedFiles]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles(files.filter((photo, idx) => idx !== index));
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title="Create News"
      actions={
        <>
          <IconButton
            size="large"
            onClick={handleAddFileClick}
            sx={{ mr: 'auto' }}
          >
            <Icon name="pencil" />
          </IconButton>
          <Button color="secondary" size="large" onClick={handleCreateNews}>
            Create News
          </Button>
        </>
      }
    >
      <S.FormWrapper sx={{ mb: 28 }}>
        <Typography variant="body2">Title*</Typography>
        <Input value={title} onChange={handleChangeTitle} placeholder="Title" />
      </S.FormWrapper>
      <S.FormWrapper>
        <Typography variant="body2">News*</Typography>
        <Input
          multiline
          value={news}
          onChange={handleChangeNews}
          placeholder="What news do you want to share?"
        />
      </S.FormWrapper>
      <input
        style={{ display: 'none' }}
        type="file"
        ref={fileSelector}
        accept="image/jpeg, image/png, image/gif"
        onChange={handleAddFile}
        multiple
      />
      <ImageList files={files} onRemoveFile={handleRemoveFile} />
    </Dialog>
  );
};
