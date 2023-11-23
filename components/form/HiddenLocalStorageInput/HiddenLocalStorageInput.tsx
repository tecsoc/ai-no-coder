"use client";
import { useCallback, useState } from 'react';
import { PasswordInput, Button } from '@mantine/core';
import { useLocalStorage } from 'react-use';
import React from 'react';

type HiddenLocalStorageInputProps = {
  label: string;
  description?: string;
  placeholder?: string;
}

const HiddenLocalStorageInput: React.FC<HiddenLocalStorageInputProps> = ({ label, description, placeholder }) => {
    const [apiKey, setApiKey] = useLocalStorage<string>('openaiApiKey');
    const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setApiKey(event.currentTarget.value);
    }, [setApiKey]);

    return (
      <PasswordInput
        label={label}
        description={description}
        placeholder={placeholder}
        value={apiKey}
        onChange={onChange}
      />
    );
}

export default React.memo(HiddenLocalStorageInput);