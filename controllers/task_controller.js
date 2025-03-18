import Task from "../models/task_models.js";

class TaskController {
    async adding(req, res) {
        try {
            const { UserID, date, description, tasktitle } = req.body;

            console.log({
                UserID,
                date,
                tasktitle,
                description
            });

            if (!UserID || !date || !description || !tasktitle) {
                return res.status(400).json({ message: "Все поля обязательны для заполнения" });
            }

            const dateObject = new Date(date);
            const newTask = await Task.create({
                UserID,
                date: dateObject.toISOString(), 
                tasktitle,
                description
            });

            return res.status(201).json(newTask);
        } catch (e) {
            console.error(e);
            return res.status(500).json({ message: "Ошибка при добавлении задачи" });
        }
    }

    async comprasion(req, res) {
        const { id } = req.params;
        
        try {
            const tasks = await Task.findAll({ where: { UserID: id } });

            console.log('Совпадения:', tasks);

            if (tasks.length === 0) {
                return res.status(404).json({ message: "Задачи не найдены" });
            }

            return res.status(200).json(tasks);
        } catch (e) {
            console.error('Ошибка при получении задач:', e);
            return res.status(500).json({ message: "Ошибка сервера" });
        }
    }
}

export default new TaskController();