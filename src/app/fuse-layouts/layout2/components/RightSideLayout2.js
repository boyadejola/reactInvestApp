import ChatPanel from "app/fuse-layouts/shared-components/chatPanel/ChatPanel";
import QuickPanel from "app/fuse-layouts/shared-components/quickPanel/QuickPanel";
import NotificationPanel from "app/fuse-layouts/shared-components/notificationPanel/NotificationPanel";
import { memo } from "react";

function RightSideLayout2() {
  return (
    <>
      <ChatPanel />

      <QuickPanel />

      <NotificationPanel />
    </>
  );
}

export default memo(RightSideLayout2);
