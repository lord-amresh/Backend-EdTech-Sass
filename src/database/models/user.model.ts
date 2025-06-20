
import {Table,Column,Model,DataType, PrimaryKey} from "sequelize-typescript"

@Table({
    tableName : 'users', // uta gui ma dekhine name vayo(phpmyadmin ma )
    modelName : 'user', // project bhita mathi ko table lai acess garne name
    timestamps : true
})

class User extends Model{
    @Column({
        primaryKey : true,
        type : DataType.UUID,
        defaultValue : DataType.UUIDV4
    })
    declare id : string

    @Column({
        type : DataType.STRING
    })
    declare username : string

    @Column({
        type : DataType.STRING
    })
    declare password : string

    @Column({
        type : DataType.STRING
    })
    declare email : string

    @Column({
        type : DataType.ENUM('teacher', 'institute', 'super-admin', 'student'),
        defaultValue : 'student',
    })
    declare role:string
}

export default User