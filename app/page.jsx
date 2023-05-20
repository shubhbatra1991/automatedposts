import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className = "w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover and share
            <br className="max-md:hidden" />
            <span className="orange_gradient">Ai powered prompts</span>
        </h1>
        <p className="desc text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, odio.
        </p>

        {/* Feed */}
        <Feed />

    </section>
  );
};

export default Home;