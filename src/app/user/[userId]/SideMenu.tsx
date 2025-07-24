import { EllipsisVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useParams, useRouter } from "next/navigation";
import { refetchUser, unfriend } from "@/lib/socketStore";
import { useUserStore } from "@/lib/userStore";

export default function SideMenu() {
  const userState = useUserStore((state) => state.user);
  if (!userState) return "loading userId...";
  const friendId = useParams().userId as string;
  const router = useRouter();

  const handleUnfriend = () => {
    unfriend(userState.userId, friendId);
    refetchUser(userState.userId);
    router.push("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <EllipsisVertical />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>Blank</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          Delete all chat
        </DropdownMenuItem>
        <DropdownMenuItem variant="destructive" onClick={handleUnfriend}>
          Unfriend
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
