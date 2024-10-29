'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const FormSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: 'Email must be at least 2 characters.',
    })
    .email({ message: 'Not a valid email.' }),
});

export default function NewFriendForm() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
    },
  });

  async function onSubmit(values) {
    try {
      const res = await fetch('/api/friends', {
        method: 'POST',
        body: JSON.stringify(values),
      });

      const jsonRes = await res.json();
      console.log(jsonRes);

      if (res.status === 201) {
        console.log('salut');
        console.log(jsonRes.data.friendRequest);
      } else if (res.status === 200) {
        console.log('salut din else if');
        console.log(jsonRes.data.newFriend);
      } else {
        console.log('salut din else');
        console.log(jsonRes.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex w-[350px] items-start justify-between gap-3'
      >
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormControl>
                <Input
                  {...field}
                  placeholder='Add a new friend'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          size='lg'
          type='submit'
        >
          Add
        </Button>
      </form>
    </Form>
  );
}
