"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserPlus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useUserStore } from "@/lib/userStore";
import { convertToTitleCase } from "@/lib/utils";
import { useAddFriends } from "@/lib/socketStore";

const FormSchema = z.object({
  selectedUsersIds: z
    .array(z.string())
    .min(1, { message: "Select at least one user" }),
});

type FormData = z.infer<typeof FormSchema>;

export default function UserSelectors() {
  const friends = useUserStore((state) => state.friends);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: { selectedUsersIds: [] },
  });

  const router = useRouter();
  const onSubmit = (formData: FormData) => {
    useAddFriends(formData.selectedUsersIds);
    router.push("/");
  };

  useEffect(() => {
    if (errors.selectedUsersIds) {
      toast(errors.selectedUsersIds.message, {
        action: {
          label: "Dismiss",
          onClick: () => {},
        },
      });
    }
  }, [errors.selectedUsersIds]);

  if (!friends) return <p>loading friends...</p>;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col mt-4">
        {friends.map((user) => (
          <label
            key={user.userId}
            className="text-2xl flex items-center gap-4 border-b pl-8 py-2"
          >
            <input
              {...register("selectedUsersIds")}
              type="checkbox"
              value={user.userId}
              className="size-6"
            />
            <span className="select-none">
              {convertToTitleCase(user.fullName)}
            </span>
          </label>
        ))}
      </div>

      <Button size={"lg"} className="fixed right-8 bottom-8">
        <UserPlus />
        <span>Add Selected as Friends</span>
      </Button>
    </form>
  );
}
