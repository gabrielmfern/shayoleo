"use client";
import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiStrapi } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { useEffect, useRef, useState } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { MdSignalWifiStatusbarConnectedNoInternet4 } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { BiLogoZoom } from "react-icons/bi";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { FiExternalLink } from "react-icons/fi";

import { sendEmail } from "@/lib/actions";

export default function Home() {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);

  const projectsSection = useRef(null);

  const header = useRef(null);
  const heroSection = useRef(null);

  const humburgerBtn = useRef(null);
  const humburgerMenuContainer = useRef(null);

  const form = useRef(null);

  // implementing scroll to projects section
  function handleScrollToProjects(e) {
    e.preventDefault();
    projectsSection.current.scrollIntoView({ behavior: "smooth" });
  }

  // implement smooth scroll to section  when na link is clicked

  function handleScrollToSections(e) {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }

  // implementing fixed navigation when hero section is not in view

  useEffect(() => {
    const stickyNav = function (entries) {
      const [entry] = entries;
      console.log(entry);

      if (entry.isIntersecting) {
        header.current.classList.remove("sticky");
      } else {
        header.current.classList.add("sticky");
      }
    };
    const heroSectionObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
      rootMargin: "-90px",
    });
    heroSectionObserver.observe(heroSection.current);
  }, []);

  // implement displaying of  hunburger menu
  function handleDisplayingHumburgerMenu(e) {
    e.preventDefault();

    setIsHamburgerActive(
      !humburgerMenuContainer.current.classList.contains("active")
    );

    humburgerMenuContainer.current.classList.toggle("active");
  }

  // implement

  function handleHumburgerLinkClicked(e) {
    e.preventDefault();
    const linkClicked = e.target.closest(".hamburger-menu_link");

    if (!linkClicked) return;

    setIsHamburgerActive(
      !humburgerMenuContainer.current.classList.contains("active")
    );

    humburgerMenuContainer.current.classList.toggle("active");

    humburgerBtn.innerHTML = `<i class="fa fa-bars menu-icon" aria-hidden="true"></i>`;

    const id = linkClicked.getAttribute("href");

    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }

  const {
    register,
    formState: { errors, isValid, isDirty, isSubmitting },
    handleSubmit,
  } = useForm();

  async function handleSendingEmail(formData) {
    try {
      // const res = await emailjs.sendForm(
      //   "service_d3v14ap",
      //   "template_lb6ols3",
      //   form.current,
      //   "mUAx85XrZTBdf3zqo"
      // );

      await sendEmail(formData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <section ref={heroSection} class="hero justify-items-stretch">
        {/* <div class="background_hero"></div> */}
        <div class="wrapper">
          <header ref={header} class="header">
            <h2 class="visually-hidden">Header</h2>
            <div class="header-wraper">
              <h2 class="visually-hidden">Navigation</h2>
              <div class="profile-image-container">
                <Image
                  width={1000000}
                  height={100000}
                  class="profile-image"
                  src="/images/leonard-image.png"
                  alt=""
                />
              </div>
              <nav onClick={handleScrollToSections} class="header__nav">
                <a href="#skills" class="nav-link skills-link">
                  {" "}
                  skills{" "}
                </a>

                <a href="#projects" class="nav-link project-link">
                  {" "}
                  Projects{" "}
                </a>
                <a href="#socials" class="nav-link social-link">
                  {" "}
                  Socials{" "}
                </a>
                <a href="#contact" class="nav-link hero__contact underline">
                  Contact me
                </a>
              </nav>
              <nav
                ref={humburgerBtn}
                onClick={handleDisplayingHumburgerMenu}
                class="menu h-12 w-12 cursor-pointer "
              >
                {isHamburgerActive ? (
                  <FaTimes class="menu-icon" />
                ) : (
                  <IoMdMenu class="menu-icon" />
                )}
              </nav>
            </div>
            <div
              onClick={handleHumburgerLinkClicked}
              ref={humburgerMenuContainer}
              class="hamburger-menu-container"
            >
              <nav class="hamburger-menu_links">
                <a
                  href="#skills"
                  class="hamburger-menu_link nav-link skills-link"
                >
                  skills
                </a>

                <a
                  href="#projects"
                  class="hamburger-menu_link nav-link project-link"
                >
                  Projects
                </a>
                <a
                  href="#socials"
                  class="hamburger-menu_link nav-link social-link"
                >
                  Socials
                </a>
                <a
                  href="#contact"
                  class="hamburger-menu_link nav-link hero__contact underline"
                >
                  Contact me
                </a>
              </nav>
            </div>
          </header>
          <div class="hero__wrapper flex-col  items-center justify-center">
            <div class="hero__text flex text-center gap-y-8 flex-col w-full  items-center justify-center">
              <h1 class="hero__headline header-xl max-w-[775px]">
                Transforming concepts into seemless user experience.
              </h1>

              <p class="hero__description">
                Hi! i'm Leonard, Next.js Developer based in Tanzania
              </p>
              <a
                onClick={handleScrollToProjects}
                class="hero__contact contactbtn underline"
              >
                See my works
              </a>
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        <section
          id="skills"
          class="section p-8 skills grid gap-x-8 gap-y-12  sm:grid-cols-2 "
        >
          <div className="relative rounded-sm overflow-hidden  min-h-80  ">
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              class=""
              src="/images/pankaj-patel-u2Ru4QBXA5Q-unsplash.jpg"
              alt="screenshot of design portfolio website"
            />
          </div>
          <div className="flex flex-col gap-8 sm:justify-center">
            <div className=" border-[--bg-body2] gap-4 border-2 p-6 rounded-md grid justify-items-start grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
              <div className="">
                <p>I constantly build projects with </p>
                <h1 className=" font-bold">my tech stack</h1>
              </div>
              <div className=" max-w-56 items-center  grid justify-items-start grid-cols-[repeat(auto-fit,minmax(40px,1fr))]">
                <RiTailwindCssFill />
                <FaReact />
                <SiNextdotjs />
                <SiStrapi />
                <SiMongodb />
              </div>
            </div>
            <div className=" border-[--bg-body2] border-2 p-6 rounded-md  grid justify-items-start gap-y-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
              <div>
                <p className=" ">I'm very flexible with</p>
                <h1 className=" font-bold">time zone communication</h1>
              </div>

              <div className=" max-w-56 items-center  grid justify-items-start grid-cols-[repeat(auto-fit,minmax(40px,1fr))]">
                <FaLaptopCode />
                <MdSignalWifiStatusbarConnectedNoInternet4 />
                <FaGithub />
                <IoLogoWhatsapp />
                <BiLogoZoom />
              </div>
            </div>
          </div>
        </section>

        <section ref={projectsSection} id="projects" class="projects">
          <div class="wrapper projects__wrapper">
            <div class="projects__grid">
              <h2 class="projects__headline header-xl">Projects</h2>
              <div></div>

              <div class="section projects__item grid w-full gap-y-4">
                <div className="w-full relative rounded-sm overflow-hidden  min-h-80  ">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                    class="w-full"
                    src="/images/poshdesign.PNG"
                    alt="screenshot of design portfolio website"
                  />
                </div>

                <div className="grid gap-4  grid-cols-1 justify-items-center">
                  <h3 class="font-bold text-2xl uppercase text-center">
                    PoshDesigns Webiste
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://posh-designs.vercel.app/"
                      target="blank"
                      class=""
                    >
                      <FiExternalLink />{" "}
                    </a>
                    <a
                      href="https://github.com/leonard-shayo/poshDesigns"
                      target="blank"
                      class=""
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              <div class="section projects__item grid w-full gap-y-4">
                <div className="w-full relative rounded-sm overflow-hidden  min-h-80  ">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                    class="w-full"
                    src="/images/manamba.PNG"
                    alt="screenshot of design portfolio website"
                  />
                </div>

                <div className="grid gap-4  grid-cols-1 justify-items-center">
                  <h3 class="font-bold text-2xl uppercase text-center">
                    manamba App
                  </h3>
                  <div className="flex gap-4">
                    <a href="https://manamba.co.tz/" target="blank" class="">
                      <FiExternalLink />{" "}
                    </a>
                    {/* <a
                      href="https://posh-designs.vercel.app/"
                      target="blank"
                      class=""
                    >
                      <FaReact />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" class="section contact bg-less-dark">
          <div class="wrapper contact__wrapper bottom-border">
            <div class="contact__text">
              <h2 class="contact__headline header-xl">Contact</h2>
              <p class="contact__description">
                I would love to hear about your project and how I could help.
                Please fill in the form, and I'll get back to you as soon as
                possible.
              </p>
            </div>
            <form
              onSubmit={handleSubmit(handleSendingEmail)}
              method="POST"
              class="contact__form"
              ref={form}
            >
              <div class="contact__control">
                <label for="name" class="visually-hidden">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  {...register("name", { required: "please Enter your name" })}
                />
                {errors.name && (
                  <p className="text-red-500 font-light py-1 text-xs">
                    {errors.name.message}
                  </p>
                )}

                <Image
                  src="images/icon-invalid.svg"
                  alt=""
                  class="contact__invalid-icon"
                  width={1000000}
                  height={100000}
                />
              </div>
              <div class="contact__control">
                <label for="email" class="visually-hidden">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "please enter your email",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Provide correct email",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 font-light py-1 text-xs">
                    {errors.email.message}
                  </p>
                )}
                <Image
                  src="images/icon-invalid.svg"
                  alt=""
                  class="contact__invalid-icon"
                  width={1000000}
                  height={100000}
                />
              </div>
              <div class="contact__control">
                <label for="message" class="visually-hidden">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="3"
                  placeholder="Message"
                  {...register("message", {
                    required: "please enter a message",
                  })}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 font-light py-1 text-xs">
                    {errors.message.message}
                  </p>
                )}
                <Image
                  src="images/icon-invalid.svg"
                  alt=""
                  class="contact__invalid-icon"
                  width={1000000}
                  height={100000}
                />
              </div>
              <div class="contact__control align-right">
                <button
                  disabled={!isValid || isSubmitting || !isDirty}
                  class="emaiSubmitBtn"
                  type="submit"
                >
                  {isSubmitting ? `Sending...` : `Send Message`}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer id="socials" class=" w-full bg-less-dark ">
        <h2 class="visually-hidden">Footer</h2>
        <div class="footer__nav-wrapper wrapper w-full grid grid-cols-1 gap-8 justify-items-center">
          <nav class="footer__nav gap-8">
            <h2 class="visually-hidden">Navigation</h2>

            <a
              target="blank"
              href="https://github.com/leonard-shayo"
              class="header__social"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                aria-labelledby="socialGitHub"
                role="img"
              >
                <title id="socialGitHub">GitHub</title>
                <path
                  fill="#FFF"
                  fill-rule="evenodd"
                  d="M12.304 0C5.506 0 0 5.506 0 12.304c0 5.444 3.522 10.042 8.413 11.672.615.108.845-.261.845-.584 0-.292-.015-1.261-.015-2.291-3.091.569-3.891-.754-4.137-1.446-.138-.354-.738-1.446-1.261-1.738-.43-.23-1.046-.8-.016-.815.97-.015 1.661.892 1.892 1.261 1.107 1.86 2.876 1.338 3.584 1.015.107-.8.43-1.338.784-1.646-2.738-.307-5.598-1.368-5.598-6.074 0-1.338.477-2.446 1.26-3.307-.122-.308-.553-1.569.124-3.26 0 0 1.03-.323 3.383 1.26.985-.276 2.03-.415 3.076-.415 1.046 0 2.092.139 3.076.416 2.353-1.6 3.384-1.261 3.384-1.261.676 1.691.246 2.952.123 3.26.784.861 1.26 1.953 1.26 3.307 0 4.721-2.875 5.767-5.613 6.074.446.385.83 1.123.83 2.277 0 1.645-.015 2.968-.015 3.383 0 .323.231.708.846.584a12.324 12.324 0 0 0 8.382-11.672C24.607 5.506 19.101 0 12.304 0Z"
                />
              </svg>
            </a>

            <a
              target="blank"
              href="https://twitter.com/shayoleo"
              class="header__social"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="20"
                aria-labelledby="socialTwitter"
                role="img"
              >
                <title id="socialTwitter">Twitter</title>
                <path
                  fill="#FFF"
                  d="M23.492 2.705a9.563 9.563 0 0 1-2.742.751 4.788 4.788 0 0 0 2.1-2.643 9.536 9.536 0 0 1-3.033 1.159 4.778 4.778 0 0 0-8.14 4.357 13.564 13.564 0 0 1-9.844-4.99 4.774 4.774 0 0 0-.646 2.4 4.778 4.778 0 0 0 2.124 3.977 4.765 4.765 0 0 1-2.163-.598v.061a4.778 4.778 0 0 0 3.832 4.684 4.812 4.812 0 0 1-2.158.082 4.78 4.78 0 0 0 4.462 3.316 9.584 9.584 0 0 1-5.932 2.045c-.38 0-.762-.022-1.14-.067a13.508 13.508 0 0 0 7.32 2.146c8.787 0 13.59-7.277 13.59-13.589 0-.205-.004-.412-.013-.617a9.71 9.71 0 0 0 2.381-2.471l.002-.003Z"
                />
              </svg>
            </a>
          </nav>
          <div>
            {" "}
            <p>&copy;{new Date().getFullYear()} All Rights Reserved</p>
          </div>
        </div>
      </footer>
      <div class="message visually-hidden"></div>
    </div>
  );
}
