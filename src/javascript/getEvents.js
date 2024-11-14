export async function getTasks({ user, startDate, endDate }) {
    return fetch("/api/tasks", {
        method: "get",
        headers: { "user": user, "startDate": startDate, "endDate": endDate },
    })
        .then((response) => response.json())
        .then((data) => {
            return data;
        });
}