type Team = "A" | "B";

type TeamSelectButtonProps = {
  team: Team;
  label: string;
  onClick: (team: Team) => void;
};

function TeamSelectButton({ team, label, onClick }: TeamSelectButtonProps) {
  return (
    <button type="button" onClick={() => onClick(team)}>
      {label}
    </button>
  );
}

export default function TopPage() {
  const handleTeamSelect = (team: Team) => {
    console.log(`${team}チームが選択されました`);
  };

  return (
    <div>
      <h1>世界征服サミット2026</h1>
      <p>貴方のチームを選択してください</p>

      <div>
        <TeamSelectButton
          team="A"
          label="Aチーム"
          onClick={handleTeamSelect}
        />

        <TeamSelectButton
          team="B"
          label="Bチーム"
          onClick={handleTeamSelect}
        />
      </div>
    </div>
  );
}