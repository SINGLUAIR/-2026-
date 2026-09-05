import { useState } from "react";

type TeamRole = "A" | "B";

type TeamRouteMap = {
  A: string;
  B: string;
};

type TeamRoleSelectorProps = {
  routes?: TeamRouteMap;
  storageKey?: string;
};

const defaultRoutes: TeamRouteMap = {
  A: "/team/a",
  B: "/team/b",
};

export default function TeamRoleSelector({
  routes = defaultRoutes,
  storageKey = "teamRole",
}: TeamRoleSelectorProps) {
  const [selectedTeam, setSelectedTeam] = useState<TeamRole | null>(null);

  const handleSelectTeam = (team: TeamRole) => {
    setSelectedTeam(team);
  };

  const handleCancel = () => {
    setSelectedTeam(null);
  };

  const handleConfirm = () => {
    if (!selectedTeam) return;

    localStorage.setItem(storageKey, selectedTeam);
    window.location.href = routes[selectedTeam];
  };

  return (
    <div>
          {!selectedTeam ? (
        <div>
          <button type="button" onClick={() => handleSelectTeam("A")}>
            Aチーム
          </button>

          <button type="button" onClick={() => handleSelectTeam("B")}>
            Bチーム
          </button>
        </div>
      ) : (
        <div>
          <p>{selectedTeam}チームでいいですか？</p>

          <button type="button" onClick={handleConfirm}>
            はい
          </button>

          <button type="button" onClick={handleCancel}>
            いいえ
          </button>
        </div>
      )}
    </div>
    );