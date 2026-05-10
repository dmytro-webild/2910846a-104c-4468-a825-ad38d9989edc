"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Heart, Pen, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="medium"
        background="none"
        cardStyle="gradient-mesh"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "About",          id: "#about"},
        {
          name: "Services",          id: "#services"},
        {
          name: "Portfolio",          id: "#portfolio"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="Riss Smart"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Riss Smart"
      description="Helping Authors Turn Ideas Into Emotionally Powerful Stories. I am Samson R., your romance ghostwriter and book editor."
      buttons={[
        {
          text: "View Portfolio",          href: "#portfolio"},
        {
          text: "Hire Me",          href: "https://www.upwork.com/freelancers/~0174d7a8e4c140d810"},
      ]}
      slides={[
        { imageSrc: "http://img.b2bpic.net/free-photo/portrait-festive-plump-male-eyeglasses-bow-tie-dark-grey-background_613910-13747.jpg", imageAlt: "Samson R" },
        { imageSrc: "http://img.b2bpic.net/free-photo/hands-holding-blank-book_23-2148441990.jpg", imageAlt: "Romance Fiction" },
        { imageSrc: "http://img.b2bpic.net/free-photo/arrangement-desk-elements-red-background_23-2148513305.jpg", imageAlt: "Developmental Editing" },
        { imageSrc: "http://img.b2bpic.net/free-photo/happy-valentines-day-greeting-card_53876-96870.jpg", imageAlt: "Self Help Writing" },
        { imageSrc: "http://img.b2bpic.net/free-photo/opened-book-wooden-tabletop_23-2147767274.jpg", imageAlt: "Writing Sample" },
        { imageSrc: "http://img.b2bpic.net/free-photo/hand-writing-blank-paper-coffee-cup_53876-31474.jpg", imageAlt: "Editing Sample" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        { type: "text", content: "More Than Just A Freelancer" },
        { type: "image", src: "http://img.b2bpic.net/free-photo/portrait-men-sitting-chair-with-white-t-shirt-sunglasses-street_1153-6668.jpg", alt: "Samson R" },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwelve
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        { id: "1", label: "Romance", title: "Romance Ghostwriting", items: ["Immersive romance stories", "Compelling tension", "Realistic dialogue"] },
        { id: "2", label: "Editing", title: "Book Editing", items: ["Voice-preserving editing", "Emotional flow", "Pacing focused"] },
        { id: "3", label: "Proof", title: "Proofreading", items: ["Grammar clean-up", "Polished manuscript", "Formatting precision"] },
        { id: "4", label: "Story", title: "Story Development", items: ["Plot structuring", "Character arcs", "Chapter outlining"] },
      ]}
      title="Services Designed For Authors"
      description="Helping writers transform rough ideas into emotionally engaging stories."
    />
  </div>

  <div id="portfolio" data-section="portfolio">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        { id: "1", name: "Romance Fiction", price: "View Sample", imageSrc: "http://img.b2bpic.net/free-photo/background-celebration-vintage-paper-old_1220-930.jpg" },
        { id: "2", name: "Developmental Editing", price: "View Sample", imageSrc: "http://img.b2bpic.net/free-photo/open-book-more-books_23-2148213824.jpg" },
        { id: "3", name: "Self Help Writing", price: "View Sample", imageSrc: "http://img.b2bpic.net/free-photo/together-we-can-help-concept_23-2148733267.jpg" },
        { id: "4", name: "Creative Writing", price: "View Sample", imageSrc: "http://img.b2bpic.net/free-photo/girls-face-open-book_23-2147617721.jpg" },
        { id: "5", name: "Contemporary Romance", price: "View Sample", imageSrc: "http://img.b2bpic.net/free-photo/businessman-turning-white-blank-paper-with-stationeries-smartphone-wooden-table_23-2147885730.jpg" },
        { id: "6", name: "Full Manuscript", price: "View Sample", imageSrc: "http://img.b2bpic.net/free-photo/close-up-student-reading-bed_23-2148882719.jpg" },
      ]}
      title="Writing Portfolio"
      description="Selected writing, editing, and ghostwriting projects."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="depth-3d"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        { id: "1", title: "Emotional Storytelling", value: "100%", icon: Heart },
        { id: "2", title: "Voice Preservation", value: "Primary", icon: Pen },
        { id: "3", title: "Client Collaboration", value: "Strong", icon: Users },
      ]}
      title="Why Clients Choose Me"
      description="Stories need emotion, not robotic writing."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Sarah Johnson", role: "Author", company: "Indie Fiction", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/charming-woman-with-old-book_23-2147797535.jpg" },
        { id: "2", name: "Michael Chen", role: "Author", company: "New Media", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-joyful-black-multiplier-blinks-with-eyes_273609-43895.jpg" },
        { id: "3", name: "Emily Rodriguez", role: "Author", company: "Creative Hub", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-writing-her-journal_23-2150416364.jpg" },
        { id: "4", name: "David Kim", role: "Author", company: "Future Press", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/successful-man-pointing-camera-with-finger_1262-3118.jpg" },
        { id: "5", name: "Linda White", role: "Author", company: "Storyline Co", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/photo-two-multiethnic-women-sit-together-coffee-shop_273609-28691.jpg" },
      ]}
      title="Author Experiences"
      description="Hear what authors say about working with Riss Smart."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{ variant: "gradient-bars" }}
      tag="Let's work together"
      title="Build Something Memorable"
      description="Start a project by reaching out today."
      imageSrc="http://img.b2bpic.net/free-photo/portrait-beautiful-woman-posing-blue-jacket-with-paint-brush-stroke_23-2149020779.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      logoText="Riss Smart"
      columns={[
        { items: [{ label: "About", href: "#about" }, { label: "Services", href: "#services" }] },
        { items: [{ label: "Portfolio", href: "#portfolio" }, { label: "Contact", href: "#contact" }] },
        { items: [{ label: "Email", href: "mailto:rotimis124@gmail.com" }, { label: "WhatsApp", href: "https://wa.me/2347088054768" }] },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
