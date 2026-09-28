import InternalLink from "@/src/components/InternalLink";
import { useCommonComponentsContext } from "@/src/context/CommonComponentsContext";

export default function UserSettings() {
  const {
    header: { userSettings, logout, webVersion },
  } = useCommonComponentsContext();

  return (
    <div className="p-8">
      <div className="flex flex-col items-center gap-4 mb-8">
        {userSettings.map((page, index) => (
          <InternalLink key={index} page={page}>
            {page.title}
          </InternalLink>
        ))}
      </div>
    </div>
  );
}
