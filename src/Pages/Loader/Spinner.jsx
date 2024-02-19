export default function Spinner() {
  return (
    <div class="flex justify-center items-center h-screen">
    <div class="relative inline-flex">
        <div class="w-12 h-12 bg-deep-purple-accent-400 rounded-full"></div>
        <div class="w-12 h-12 bg-deep-purple-accent-400 rounded-full absolute top-0 left-0 animate-ping"></div>
        <div class="w-12 h-12 bg-deep-purple-accent-400 rounded-full absolute top-0 left-0 animate-pulse"></div>
    </div>
</div>
  );
}
