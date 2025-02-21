import { ComponentProps, JSXElement, splitProps } from "solid-js";

function App() {
  let text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, enim aliquid? Optio labore accusamus eum. Repellat, enim labore accus.";
  // text = "Hallo";
  return (
    <div class="h-lvh bg-slate-200">
      <header class="flex flex-col items-center justify-center h-96">
        <h1 class="text-8xl text-slate-950">Welcome to the site</h1>
        <h2 class="text-5xl text-slate-800">Hi there</h2>
      </header>
      <div class="bg-slate-950 py-4 text-slate-100 text-2xl font-bold rotate-6 w-[110%] relative right-2">
        <Marquee gap={8}>{text}</Marquee>
      </div>
      <div class="mt-44"></div>
      <div class="bg-slate-950 py-4 text-slate-100 text-2xl font-bold">
        <Marquee gap={8}>{text}</Marquee>
      </div>
      <div class="mt-44"></div>
      <div class="bg-slate-950 py-4 text-slate-100 text-2xl font-bold -rotate-6 w-[110%] relative right-2">
        <Marquee gap={8}>{text}</Marquee>
      </div>
    </div>
  );
}

function Marquee(props: { gap: number; children: JSXElement }) {
  return (
    <div
      class="flex gap-(--gap) overflow-hidden"
      style={{
        "--gap": `calc(var(--spacing) * ${props.gap})`
      }}
    >
      <MarqueeText>{props.children}</MarqueeText>
      <MarqueeText aria-hidden={true}>{props.children}</MarqueeText>
    </div>
  );
}

function MarqueeText(props: { children: JSXElement } & ComponentProps<"div">) {
  const [local, others] = splitProps(props, ["children"]);

  return (
    <div class="animate-marquee shrink-0 min-w-full" {...others}>
      {local.children}
    </div>
  );
}

export default App;
