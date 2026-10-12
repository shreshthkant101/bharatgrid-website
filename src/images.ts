// Photography from Unsplash (Unsplash License: free for commercial use, no attribution required),
// served from Unsplash's image CDN in the size each screen needs.
export type Img = { id: string; alt: string; credit: string; position?: string };

export const IMAGES = {
  seaLink: {
    id: "photo-1569758267239-d08deb78bb1a",
    alt: "The Bandra–Worli Sea Link in Mumbai on a misty morning",
    credit: "Previn Samuel",
  },
  capitol: {
    id: "photo-1697308539761-312d0c9b884f",
    alt: "The Capitol Complex in Chandigarh under a clear sky",
    credit: "Ankit Pai N",
    position: "50% 45%",
  },
  family: {
    id: "photo-1567122087721-47b09b61e1d1",
    alt: "A family of three generations smiling outdoors",
    credit: "Ashwini Chaudhary (Monty)",
    position: "50% 35%",
  },
  bus: {
    id: "photo-1707158758017-03d2e2a8bbec",
    alt: "A city bus waiting at a stop in the evening",
    credit: "A M",
    position: "40% 55%",
  },
} satisfies Record<string, Img>;

const WIDTHS = [480, 800, 1200, 1600, 2200];
export const imgUrl = (id: string, w: number) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=72`;
export const srcSet = (id: string) => WIDTHS.map((w) => `${imgUrl(id, w)} ${w}w`).join(", ");
