const database = require("../connection/database")


class Activity{

    static findUserActivity(user_id, search, month, method){
        return database('activities')
        .where({'activities.user': user_id, 'deleted_at': null})
        .where((qb)=>{
            if (search){
                qb.where('title', 'like', `%${search}%`)
            }
            if (method){
                qb.where('method', method)
            }
            if (month){
                const end_date = [0,31, 28, 31, 30, 31, 30]
                const from = `2022-${month}-01`
                const to = `2022-${month}-${end_date[month]}`
                qb.whereBetween('start_date', [from, to])
            }
        })
        .join('methods', 'activities.method', 'methods.id')
        .select('activities.id', 'activities.title', 'methods.methode_title', 'activities.start_date', 'activities.end_date')

    }

    static findById(id){
        return database('activities')
        .where("id", id)
    }

    static create(title, user, method, start_date, end_date){
        return database('activities').insert({
            title, user, method, start_date, end_date
        })
    }

    static update(id, title, method, start_date, end_date){
        return database('activities')
            .where("id", id)
            .update({
                title, method, start_date, end_date, updated_at: database.fn.now(6)
            })
    }

    static softDelete(id){
        return database('activities')
            .where("id", id)
            .update({
                updated_at: database.fn.now(6),
                deleted_at: database.fn.now(6)
            })
    }
}

module.exports = Activity