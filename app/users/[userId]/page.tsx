'use client';

import { AlbumsList } from "@/components/AlbumsList";
import { PostsList } from "@/components/PostsList";
import { Profile } from "@/components/Profile";
import { TodoList } from "@/components/TodoList";
import { useURL } from "@/hooks/useURL";
import { UserTab, UserTabKey } from "@/types";

type Props = {
  params: {
    userId: string;
  };
}

export default function UserPage({ params }: Props) {
  const { params: searchParams } = useURL();
  const { userId } = params;

  const tabKeys = Object.keys(UserTab);

  const content: UserTabKey = (
    searchParams.get('content') || tabKeys[0]
  ) as UserTabKey;

  switch (content) {
    case "posts":
      return <PostsList userId={userId} />

    case "albums":
      return <AlbumsList userId={userId} />

    case "todos":
      return <TodoList userId={userId} />

    default:
      return <Profile userId={userId} />
  }
};
