

export const apiLoader = async () => {
    const response1 = await fetch('https://api.github.com/users/umeshraut2002');
    return response1.json();
}