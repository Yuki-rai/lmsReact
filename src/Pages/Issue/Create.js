import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField, Button, Container } from '@mui/material';

export default function CreateIssue() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="selectedDate"
          control={control}
          defaultValue={null}
          render={({ field }) => (
            <DatePicker
              label="Select Date"
              inputFormat="MM/dd/yyyy"
              renderInput={(params) => <TextField {...params} />}
              {...field}
            />
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
}

