import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addProject } from "../../services/project-api";

const initialState = {
    projectName: "",
    projectKey: "",
    projectDescription: "",
    projectIcon: {
        id: "",
        iconClass: "",
        color: "",
        bgColor: "",
    },
    projectColor: "#174AFB",
    projectType: "",
    projectPrivacy: "",
    teamMembers: "",
    ownerId: "",
    projectStatus: "",
}

const addProjectHelper = () => {

    const icons = [
        {
            id: 1,
            iconClass: "bi bi-globe",
        },
        {
            id: 2,
            iconClass: "bi bi-pc-display",
        },
        {
            id: 3,
            iconClass: "bi bi-phone",
        },
        {
            id: 4,
            iconClass: "bi bi-bag",
        },
        {
            id: 5,
            iconClass: "bi bi-hdd-stack",
        },
        {
            id: 6,
            iconClass: "bi bi-gear",
        },
        {
            id: 7,
            iconClass: "bi bi-code-slash",
        },
        {
            id: 8,
            iconClass: "bi bi-box",
        },
        {
            id: 9,
            iconClass: "bi bi-palette",
        },
        {
            id: 10,
            iconClass: "bi bi-send",
        },
        {
            id: 11,
            iconClass: "bi bi-chat-quote",
        },
        {
            id: 12,
            iconClass: "bi bi-bullseye",
        },
        {
            id: 13,
            iconClass: "bi bi-shield-exclamation",
        },
        {
            id: 14,
            iconClass: "bi bi-lock",
        },
        {
            id: 15,
            iconClass: "bi bi-puzzle",
        },
        {
            id: 16,
            iconClass: "bi bi-star",
        },
        {
            id: 17,
            iconClass: "bi bi-flag",
        },
        {
            id: 18,
            iconClass: "bi bi-bookmark",
        },
        {
            id: 19,
            iconClass: "bi bi-lightbulb",
        },
        {
            id: 20,
            iconClass: "bi bi-rocket-takeoff",
        },
        {
            id: 21,
            iconClass: "bi bi-backpack4",
        },
    ]

    const colors = [
        {
            id: 1,
            colorCode: "#174AFB",
            backgroundColorCode: "#1748fb62",
        },
        {
            id: 2,
            colorCode: "#7C4EF4",
            backgroundColorCode: "#7d4ef460",
        },
        {
            id: 3,
            colorCode: "#20BA75",
            backgroundColorCode: "#20ba7567",
        },
        {
            id: 4,
            colorCode: "#FCA917",
            backgroundColorCode: "#fca81764",
        },
        {
            id: 5,
            colorCode: "#F94045",
            backgroundColorCode: "#f940466c",
        },
        {
            id: 6,
            colorCode: "#F74983",
            backgroundColorCode: "#f749836c",
        },
        {
            id: 7,
            colorCode: "#139FCA",
            backgroundColorCode: "#139fca6b",
        },
        {
            id: 8,
            colorCode: "#8F98AB",
            backgroundColorCode: "#8f98ab69",
        },
    ]


    const privacy = [
        {
            id: 1,
            name: "Private",
            description: "Only members can view and access this project.",
            iconClass: "bi bi-lock",
        },
        {
            id: 2,
            name: "Team",
            description: "All team members can view this project.",
            iconClass: "bi bi-people",
        },
        {
            id: 3,
            name: "Organization",
            description: "All members in your organization can view this project.",
            iconClass: "bi bi-building",
        },
        {
            id: 4,
            name: "Public",
            description: "Anyone with the link can view this project.",
            iconClass: "bi bi-globe2",
        }
    ]

    const projectTypeTemp = [
        {
            id: 1,
            name: "Web Application",
            description: "Frontend & backend",
            iconClass: "bi bi-globe",
        },
        {
            id: 2,
            name: "Mobile Application",
            description: "IOS & Android apps",
            iconClass: "bi bi-phone",
        },
        {
            id: 3,
            name: "Bug Tracking",
            description: "Track & manage bugs",
            iconClass: "bi bi-bug",
        },
        {
            id: 4,
            name: "API / Backend",
            description: "REST APIs & services",
            iconClass: "bi bi-cloud",
        },
        {
            id: 5,
            name: "Design Project",
            description: "UI/UX and design work",
            iconClass: "bi bi-pencil",
        },
        {
            id: 6,
            name: "Marketing Project",
            description: "Campaigns & activities",
            iconClass: "bi bi-megaphone",
        },
        {
            id: 7,
            name: "Data / Analytics",
            description: "Data insights & reports",
            iconClass: "bi bi-bar-chart",
        },
        {
            id: 8,
            name: "DevOps / Infra",
            description: "Infrastructure & tools",
            iconClass: "bi bi-hdd-stack",
        },
    ]

    const [formValue, setFormValue] = useState(initialState);
    const [projects, setProjects] = useState([]);
    const [errors, setErrors] = useState({});
    const projectStore = useSelector((state) => state.project);
    const dispatch = useDispatch();

    const [projectPrivacy, setProjectPrivacy] = useState("Choose who can view and access the project.");

    const handlePrivacy = (p) => {
        setProjectPrivacy(p);
    }

    const [projectType, setProjectType] = useState("Choose the type that best describes your project.");

    const handleType = (t) => {
        setProjectType(t);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({
            ...formValue,
            [name]: value,
        });
    };

    const validate = () => {
        let formErrors = {};
        if (!formValue.projectName) {
            formErrors.projectName = "Enter your project name.";
        } else if (formValue.projectName.length > 100) {
            formErrors.projectName = "Project name should be less than 100 characters.";
        }
        if (!formValue.projectKey) {
            formErrors.projectKey = "Assign a key to your project.";
        } else if (formValue.projectKey.length > 10) {
            formErrors.projectKey = "Maximum length of key is 10 numbers."
        }
        if (formValue.projectPrivacy === "Choose who can view and access the project.") {
            formErrors.projectPrivacy = "Select privacy for your project.";
        }

        return formErrors;
    }



    const [selectedColor, setSelectedColor] = useState({
        color: "#174AFB",
        bgColor: "#1748fb62"
    });

    const [selectedIcon, setSelectedIcon] = useState({
        id: 1,
        iconClass: "bi bi-globe",
        color: selectedColor.color,
        bgColor: selectedColor.bgColor
    });

    const handleClickIcon = (i) => {
        const icon = icons.find((item) => {
            return item.id === i;
        });
        console.log(icon)
        setSelectedIcon({
            ...icon,
            color: selectedColor.color,
            bgColor: selectedColor.bgColor
        })
    }

    const handleCircleClr = (clr, bgClr) => {
        console.log(clr, bgClr)
        setSelectedColor({
            color: clr,
            bgColor: bgClr
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        formValue.projectPrivacy = projectPrivacy;
        dispatch(addProject(formValue));
    }

    useEffect(() => {
        if (projectStore.addProjectSuccess) {
            setFormValue(initialState);
            setErrors({});
        }
    }, [projectStore.addProjectSuccess]);

    return {
        handleChange,
        handleSubmit,
        errors,
        formValue,
        projects,
        projectStore,
        projectPrivacy,
        handlePrivacy,
        projectType,
        handleType,
        selectedColor,
        setSelectedColor,
        selectedIcon,
        setSelectedIcon,
        handleClickIcon,
        handleCircleClr,
        icons,
        colors,
        privacy,
        projectTypeTemp,
    }
}

export default addProjectHelper;