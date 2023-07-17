import { getTokensList } from "@/API/tokens";
import { TokenSelector } from "@/components/TokenSelector/TokenSelector";
import { dehydrate, QueryClient } from "@tanstack/react-query";

// export async function getStaticProps() {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery(["tokensList"], getTokensList);

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// }

export default function Home() {
  return (
    <main className="h-full">
      <TokenSelector />
    </main>
  );
}
