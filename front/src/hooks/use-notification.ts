import { useContext } from "react";
import { NotificationContext } from "src/contexts/notification-context";

export const useNotification =  () => useContext(NotificationContext);
