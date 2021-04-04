import QuestionsPage from "../pages/QuestionsPage.vue";
import QuestionPage from "../pages/QuestionPage.vue";
import MyPostsPage from "../pages/MyPostsPage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";
import CreateQuestion from "../pages/CreateQuestion.vue";
import LoginPage from "../pages/LoginPage.vue";
import EditQuestionPage from "../pages/EditQuestionPage.vue";

const routes = [
    {
        path: "/",
        component: QuestionsPage,
        name: "home"
    },
    {
        path: "/questions",
        component: QuestionsPage,
        name: "questions"
    },
    {
        path: "/questions/create",
        component: CreateQuestion,
        name: "questions.create"
    },
    {
        path: "/my-posts",
        component: MyPostsPage,
        name: "my-posts",
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/questions/:slug",
        component: QuestionPage,
        name: "questions.show"
    },
    {
        path: "/login-member",
        component: LoginPage,
        name: "login"
    },
    {
        path: "/questions/:id/edit",
        component: EditQuestionPage,
        name: "questions.edit"
    },
    {
        path: "*",
        component: NotFoundPage
    }
];

export default routes;
