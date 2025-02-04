import MyWorkActiveIcon from "../assets/images/icon-my-work-active.svg";
import MyWorkIcon from "../assets/images/icon-my-work.svg";
import workUtil from "../utils/work";
import moment from "moment";

export const AUTOSAVE_THROTTLE_TIME = 5000;

export const ROUTES = {
  INTAKE_FORM: "/self-service/wizard",
  HOME_PAGE: "/self-service",
  DASHBOARD_PAGE: "/self-service/dashboard",
};

/**
 * All action types
 */
export const ACTION_TYPE = {
  /*
    withAuthentication
   */
  AUTH_USER_SUCCESS: "AUTH_USER_SUCCESS",
  AUTH_USER_ERROR: "AUTH_USER_ERROR",
};

/**
 * Supported Button Sizes
 */
export const BUTTON_SIZE = {
  TINY: "tiny",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};

/**
 * Supported Button Types
 */
export const BUTTON_TYPE = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  WARNING: "warning",
  ROUNDED: "rounded",
};

export const MAX_COMPLETED_STEP = "MAX_COMPLETED_STEP";
export const HELP_BANNER = {
  title: "Not seeing what you need?",
  description: "Not seeing what you need?",
};

/**
 * Industry List
 */
export const IndustryList = [
  { label: "Accounting & Financial", value: "accounting-financial" },
  { label: "Agriculture", value: "agriculture" },
  { label: "Animal & Pet", value: "animal-pet" },
  { label: "Architectural", value: "architectural" },
  { label: "Art & Design", value: "art-design" },
  { label: "Attorney & Law", value: "attorney-law" },
  { label: "Automotive", value: "automotive" },
  { label: "Bar & Nightclub", value: "bar-nightclub" },
  { label: "Business & Consulting", value: "business-consulting" },
  { label: "Childcare", value: "childcare" },
  { label: "Cleaning & Maintenance", value: "cleaning-maintenance" },
  { label: "Communications", value: "communications" },
  { label: "Community & Nonprofit", value: "community-nonprofit" },
  { label: "Computer", value: "computer" },
  { label: "Construction", value: "construction" },
  { label: "Cosmetic & Beauty", value: "cosmetic-beauty" },
  { label: "Dating", value: "dating" },
  { label: "Education", value: "education" },
  { label: "Entertainment & the Arts", value: "entertainment-the-arts" },
  { label: "Environmental", value: "environmental" },
  { label: "Fashion", value: "fashion" },
  { label: "Food & Drink", value: "food-drink" },
  { label: "Games & Recreation", value: "games-recreation" },
  { label: "Home furnishing", value: "home-furnishing" },
  { label: "Industrial", value: "industrial" },
  { label: "Internet", value: "internet" },
  { label: "Landscaping", value: "landscaping" },
  { label: "Medical & Pharmaceutical", value: "medical-pharmaceutical" },
  { label: "Photography", value: "photography" },
  { label: "Physical Fitness", value: "physical-fitness" },
  { label: "Political", value: "political" },
  { label: "Real Estate & Mortgage", value: "real-estate-mortgage" },
  { label: "Religious", value: "religious" },
  { label: "Restaurant", value: "restaurant" },
  { label: "Retail", value: "retail" },
  { label: "Security", value: "security" },
  { label: "Spa & Esthetics", value: "spa-esthetics" },
  { label: "Sport", value: "sport" },
  { label: "Travel & Hotel", value: "travel-hotel" },
  { label: "Wedding Service", value: "wedding-service" },
];

/**
 * Design Options
 */
export const DesignOptions = [
  {
    label: "Yes, allow designers to recommend stock photos",
    value: "allow",
  },
  { label: "No, Do not Stock Photos", value: "not-allow" },
];

/**
 * ProgressLevels
 */
export const ProgressLevels = [
  { label: "Basic Info", url: "/self-service/basic-info" },
  { label: "Website Purpose", url: "/self-service/website-purpose" },
  { label: "Page Details", url: "/self-service/page-details" },
  { label: "Branding", url: "/self-service/branding" },
  { label: "Review", url: "/self-service/review" },
  { label: "Payment", url: "/self-service/payment" },
];

/**
 * page options
 */
export const PageOptions = [
  { label: "1 page (from 50$)", price: 50, value: false },
  { label: "2 page (from 100$)", price: 100, value: false },
  { label: "3 page (from 150$)", price: 150, value: false },
  { label: "4 page (from 200$)", price: 200, value: false },
  { label: "5 page (from 300$)", price: 300, value: false },
];

/**
 * page options
 */
export const DeviceOptions = [
  { label: "Computer", price: 0 },
  { label: "Tablet", price: 300 },
  { label: "Phone", price: 500 },
];

/**
 * page options
 */
export const DeliverablesOptions = [
  { label: "No Preference. Recommended for best participation", value: false },
  { label: "Figma", value: false },
  { label: "Sketch", value: false },
  { label: "Adobe XD", value: false },
  { label: "Other", value: false },
];

/**
 * Work Types
 */
export const workTypes = [
  { title: "Web", subTitle: "Example or description text", price: 499 },
  { title: "Mobile", subTitle: "Example or description text", price: 499 },
  {
    title: "Architecture",
    subTitle: "Example or description text",
    price: 499,
  },
  { title: "API", subTitle: "Example or description text", price: 499 },
  {
    title: "Data Science & AI",
    subTitle: "Example or description text",
    price: 499,
  },
  {
    title: "Visual Design",
    subTitle: "Example or description text",
    price: 499,
  },
];

/**
 * Web Work Types
 */
export const webWorkTypes = [
  {
    title: "Website Design",
    subTitle: "Information to help understand what this category would include",
    price: 499,
  },
  {
    title: "Website Development",
    subTitle: "Information to help understand what this category would include",
    price: 499,
  },
  {
    title: "Web App Design",
    subTitle: "Information to help understand what this category would include",
    price: 499,
  },
];

/**
 * Color Options
 */
export const ColorOptionsItems = [
  { name: "Blues", className: "blues" },
  { name: "Aquas", className: "aquas" },
  { name: "Greens", className: "greens" },
  { name: "Purples", className: "purples" },
  { name: "Pinks", className: "pinks" },
  { name: "Reds", className: "reds" },
  { name: "Oranges", className: "oranges" },
  { name: "Yellows", className: "yellows" },
  { name: "Light Grays", className: "lightGrays" },
  { name: "Dark Grays", className: "darkGrays" },
  { name: "Any Colors", className: "angularGradient" },
];

/**
 * Color Options
 */
export const tabNames = ["summary", "details", "messaging", "solutions"];

export const disabledSidebarRoutes = [
  "/self-service/basic-info",
  "/self-service/website-purpose",
  "/self-service/page-details",
  "/self-service/branding",
  "/self-service/review",
  "/self-service/payment",
  "/self-service/thank-you",
  "/self-service/wizard",
  "/self-service/profile",
  "/self-service/login-prompt",
  "/self-service/work-items/*",
];

export const menuItems = [
  {
    item: "My Work",
    url: "/self-service/dashboard",
    icon: <MyWorkIcon />,
    activeIcon: <MyWorkActiveIcon />,
  },
];

export const ACTIONS = {
  FORM: {
    UPDATE_PRICE: "UPDATE_PRICE",
    UPDATE_ADDITIONAL_PRICE: "UPDATE_ADDITIONAL_PRICE",
    SAVE_WORK_TYPE: "SAVE_WORK_TYPE",
    SAVE_BASIC_INFO: "SAVE_BASIC_INFO",
    SAVE_WEBSITE_PURPOSE: "SAVE_WEBSITE_PURPOSE",
    SAVE_PAGE_DETAILS: "SAVE_PAGE_DETAILS",
    SAVE_BRANDING: "SAVE_BRANDING",
    ADD_DEVICE_PRICE: "ADD_DEVICE_PRICE",
    UPDATE_PAGE_PRICE: "UPDATE_PAGE_PRICE",
    REVIEW_CONFIRMED: "REVIEW_CONFIRMED",
    SAVE_FORM: "SAVE_FORM",
    RESET_INTAKE_FORM: "RESET_INTAKE_FORM",
  },
  PROGRESS: {
    SET_ITEM: "SET_ITEM",
  },
  AUTO_SAVE: {
    COOKIE_CLEARED: "COOKIE_CLEARED",
    TRIGGER_AUTO_SAVE: "TRIGGER_AUTO_SAVE",
    INIT_ERRORED: "INIT_ERRORED",
  },
  CHALLENGE: {
    GET_CHALLENGE: "GET_CHALLENGE",
  },
  MY_WORK: {
    LOAD_WORKS_ERROR: "LOAD_WORKS_ERROR",
    LOAD_WORKS_PENDING: "LOAD_WORKS_PENDING",
    LOAD_WORKS_SUCCESS: "LOAD_WORKS_SUCCESS",
  },
  PROFILE: {
    GET_PROFILE: "GET_PROFILE",
    UPDATE_BASIC_INFO_PENDING: "UPDATE_BASIC_INFO_PENDING",
    UPDATE_BASIC_INFO_SUCCESS: "UPDATE_BASIC_INFO_SUCCESS",
    UPDATE_BASIC_INFO_ERROR: "UPDATE_BASIC_INFO_ERROR",
  },
  WORK: {
    GET_WORK: "GET_WORK",
    GET_WORK_PENDING: "GET_WORK_PENDING",
    GET_WORK_SUCCESS: "GET_WORK_SUCCESS",
    GET_WORK_ERROR: "GET_WORK_ERROR",
    GET_SUMMARY: "GET_SUMMARY",
    GET_DETAILS: "GET_DETAILS",
    GET_SOLUTIONS: "GET_SOLUTIONS",
    GET_SOLUTIONS_PENDING: "GET_SOLUTIONS_PENDING",
    GET_SOLUTIONS_SUCCESS: "GET_SOLUTIONS_SUCCESS",
    GET_SOLUTIONS_ERROR: "GET_SOLUTIONS_ERROR",
    DOWNLOAD_SOLUTION: "DOWNLOAD_SOLUTION",
    DOWNLOAD_SOLUTION_PENDING: "DOWNLOAD_SOLUTION_PENDING",
    DOWNLOAD_SOLUTION_SUCCESS: "DOWNLOAD_SOLUTION_SUCCESS",
    DOWNLOAD_SOLUTION_ERROR: "DOWNLOAD_SOLUTION_ERROR",
    SAVE_SURVEY: "SAVE_SURVEY",
    SAVE_SURVEY_PENDING: "SAVE_SURVEY_PENDING",
    SAVE_SURVEY_SUCCESS: "SAVE_SURVEY_SUCCESS",
    SAVE_SURVEY_ERROR: "SAVE_SURVEY_ERROR",
    SET_IS_SAVING_SURVEY_DONE: "SET_IS_SAVING_SURVEY_DONE",
    GET_FORUM_NOTIFICATIONS: "GET_FORUM_NOTIFICATIONS",
    GET_FORUM_NOTIFICATIONS_PENDING: "GET_FORUM_NOTIFICATIONS_PENDING",
    GET_FORUM_NOTIFICATIONS_SUCCESS: "GET_FORUM_NOTIFICATIONS_SUCCESS",
    GET_FORUM_NOTIFICATIONS_ERROR: "GET_FORUM_NOTIFICATIONS_ERROR",
  },
};

export const AUTO_SAVE_FORM = "AUTO_SAVE_FORM";

export const CACHED_CHALLENGE_ID = "CACHED_CHALLENGE_ID";

export const CHALLENGE_FIELD_VALUES = {
  trackId: "5fa04185-041f-49a6-bfd1-fe82533cd6c8",
  typeId: "927abff4-7af9-4145-8ba1-577c16e64e2e",
  timelineTemplateId: "918f6a3e-1a63-4680-8b5e-deb95b1411e7",
};

export const INTAKE_FORM_ROUTES = [
  "/self-service/wizard",
  "/self-service/basic-info",
  "/self-service/website-purpose",
  "/self-service/page-details",
  "/self-service/login-prompt",
  "/self-service/branding",
  "/self-service/review",
  "/self-service/payment",
  "/self-service/thank-you",
];

export const CHALLENGE_STATUS = {
  ACTIVE: "Active",
  CANCELLED: "Cancelled",
  COMPLETED: "Completed",
  DRAFT: "Draft",
  NEW: "New",
};

export const WORK_STATUS_MAP = {
  [CHALLENGE_STATUS.ACTIVE]: "In progress",
  [CHALLENGE_STATUS.CANCELLED]: "Directed to sales",
  [CHALLENGE_STATUS.COMPLETED]: "Completed",
  [CHALLENGE_STATUS.DRAFT]: "Submitted",
  [CHALLENGE_STATUS.NEW]: "Draft",
};

export const WORK_STATUS_ORDER = {
  [CHALLENGE_STATUS.NEW]: 0, // Draft
  [CHALLENGE_STATUS.DRAFT]: 1, // Submitted
  [CHALLENGE_STATUS.ACTIVE]: 2, // In progress
  [CHALLENGE_STATUS.COMPLETED]: 3,
  [CHALLENGE_STATUS.CANCELLED]: 4, // Directed to sales
  Unknown: 999,
};
export const WORK_STATUSES = {
  Draft: {
    name: WORK_STATUS_MAP[CHALLENGE_STATUS.NEW],
    value: CHALLENGE_STATUS.NEW,
    color: "#555555",
  },
  Submitted: {
    name: WORK_STATUS_MAP[CHALLENGE_STATUS.DRAFT],
    value: CHALLENGE_STATUS.DRAFT,
    color: "#e90c5a",
  },
  InProgress: {
    name: WORK_STATUS_MAP[CHALLENGE_STATUS.ACTIVE],
    value: CHALLENGE_STATUS.ACTIVE,
    color: "#12c188",
  },
  Completed: {
    name: WORK_STATUS_MAP[CHALLENGE_STATUS.COMPLETED],
    value: CHALLENGE_STATUS.COMPLETED,
    color: "#2c95d7",
  },
  DirectedToSales: {
    name: WORK_STATUS_MAP[CHALLENGE_STATUS.CANCELLED],
    value: CHALLENGE_STATUS.CANCELLED,
    color: "#6569ff",
  },
};

export const WORK_TIMELINE = [
  {
    title: "WORK SUBMITTED",
    date: "created",
    completed: (work) => {
      const submitted =
        WORK_STATUS_ORDER[work.status] >
        WORK_STATUS_ORDER[WORK_STATUSES.Draft.value];
      return submitted;
    },
  },
  {
    title: "WORK STARTED",
    date: (work) => {
      const phase = work.phases.find((phase) => phase.name === "Registration");
      return phase && workUtil.phaseStartDate(phase);
    },
    active: (work) => {
      const phase = work.phases.find((phase) => phase.name === "Registration");
      const isRegistrationPhaseOpen =
        phase && phase.isOpen && moment(workUtil.phaseEndDate(phase)).isAfter();
      return (
        work.status === WORK_STATUSES.InProgress.value &&
        isRegistrationPhaseOpen
      );
    },
    completed: (work) => {
      const phase = work.phases.find((phase) => phase.name === "Registration");
      const isRegistrationPhaseClosed =
        phase && moment(workUtil.phaseEndDate(phase)).isBefore();
      const didStart =
        WORK_STATUS_ORDER[work.status] >=
        WORK_STATUS_ORDER[WORK_STATUSES.InProgress.value];
      return isRegistrationPhaseClosed && didStart;
    },
  },
  {
    title: "WORK FINISHED",
    date: (work) => {
      const phase = work.phases.find((phase) => phase.name === "Submission");
      return workUtil.phaseEndDate(phase);
    },
    active: (work) => {
      const phase = work.phases.find((phase) => phase.name === "Submission");
      const isSubmissionPhaseOpen =
        phase.isOpen && moment(workUtil.phaseEndDate(phase)).isAfter();
      return (
        work.status === WORK_STATUSES.InProgress.value && isSubmissionPhaseOpen
      );
    },
    completed: (work) => {
      const phase = work.phases.find((phase) => phase.name === "Submission");
      const isSubmissionPhaseClosed = moment(
        workUtil.phaseEndDate(phase)
      ).isBefore();
      const didStart =
        WORK_STATUS_ORDER[work.status] >=
        WORK_STATUS_ORDER[WORK_STATUSES.InProgress.value];
      return isSubmissionPhaseClosed && didStart;
    },
  },
  {
    name: "downloads-ready",
    title: "DOWNLOADS READY",
    date: (work) => {
      let phase = work.phases.find((phase) => phase.name === "Review");

      if (!phase) {
        phase = work.phases.find((phase) => phase.name === "Iterative Review");
      }

      return phase && workUtil.phaseEndDate(phase);
    },
    active: (work) => {
      let phase = work.phases.find((phase) => phase.name === "Review");

      if (!phase) {
        phase = work.phases.find((phase) => phase.name === "Iterative Review");
      }

      const isReviewPhaseOpen =
        phase && phase.isOpen && moment(workUtil.phaseEndDate(phase)).isAfter();
      return isReviewPhaseOpen;
    },
    completed: (work) => {
      let phase = work.phases.find((phase) => phase.name === "Review");

      if (!phase) {
        phase = work.phases.find((phase) => phase.name === "Iterative Review");
      }

      const isReviewPhaseEnded =
        phase && moment(workUtil.phaseEndDate(phase)).isBefore();

      const didStart =
        work.status !== WORK_STATUSES.DirectedToSales.value &&
        WORK_STATUS_ORDER[work.status] >=
          WORK_STATUS_ORDER[WORK_STATUSES.InProgress.value];

      return isReviewPhaseEnded && didStart;
    },
  },
  {
    name: "mark-as-done",
    title: "MARK AS DONE",
    date: (work) => {
      if (work.status === WORK_STATUSES.Completed.value) {
        return work.updated;
      }
    },
    active: (work) => work.status === WORK_STATUSES.Completed.value,
    completed: (work) => {
      const customerFeedbacked =
        work.metadata &&
        work.metadata.find((item) => item.name === "customerFeedback");
      return (
        work.status === WORK_STATUSES.Completed.value && customerFeedbacked
      );
    },
    hidden: (work) => {
      const customerFeedbacked =
        work.metadata &&
        work.metadata.find((item) => item.name === "customerFeedback");
      return (
        work.status === WORK_STATUSES.Completed.value && customerFeedbacked
      );
    },
  },
  {
    name: "send-to-solutions-expert",
    title: "SEND TO SOLUTIONS EXPERT",
    date: (work) => {
      if (work.status === WORK_STATUSES.DirectedToSales.value) {
        return work.updated;
      }
    },
    completed: true,
    hidden: (work) => {
      return work.status !== WORK_STATUSES.DirectedToSales.value;
    },
  },
];

export const SURVEY_QUESTIONS = [
  {
    name: "How happy are you with the quality of work?",
    value: 0,
  },
  {
    name: "How easy was it to get the results you wanted?",
    value: 0,
  },
  {
    name: "How likely are you to recommend Topcoder?",
    value: 0,
  },
  {
    name: "What can we do to make your experience better?",
    value: "",
  },
];
