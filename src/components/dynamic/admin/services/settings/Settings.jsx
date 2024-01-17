"use client";
import Title from "@/components/dynamic/admin/Title";
import { api } from "@/utils/api";
import Button from "../../Button";

const Settings = () => {
  const syncStatsWithDatabase = () => {
    api({
      method: "GET",
      url: "/api/settings",
    });
  };

  return (
    <div className="h-full font-poppins flex flex-col py-4">
      <Title title="Settings" />
      <Button
        text="Sync Stats"
        color="green"
        size="xl"
        onClick={syncStatsWithDatabase}
      />
    </div>
  );
};

export default Settings;
