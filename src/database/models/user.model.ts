
import {Table,Column,Model,DataType} from "sequelize-typescript"

@Table({
    tableName : 'users', //
    modelName : 'user',
    timestamps : true
})

class User extends Model{
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