'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('role', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            description: {
                type: Sequelize.STRING,
                allowNull: false
            }
        });

        await queryInterface.createTable('user', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            first_name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            last_name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            hashed_password: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            role_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'role',
                    key: 'id'
                },
            }
        });

        await queryInterface.createTable('apiary', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            QR_code: {
                type: Sequelize.BIGINT,
                allowNull: false
            },
            location_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            no_gondolas: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            fence_YN: {
                type: Sequelize.CHAR(1),
            },
            electricity_YN: {
                type: Sequelize.CHAR(1),
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });

        await queryInterface.createTable('gondola', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            apiary_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'appiary',
                    key: 'id'
                },
                onDelete: 'CASCADE',
            },
            QR_code: {
                type: Sequelize.BIGINT,
                allowNull: false
            },
            no_colonies: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });

        await queryInterface.createTable('colony', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            apiary_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'user',
                    key: 'id'
                },
                onDelete: 'CASCADE',
            },
            gondola_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'gondola',
                    key: 'id'
                },
                onDelete: 'CASCADE',
            },
            QR_code: {
                type: Sequelize.BIGINT,
                allowNull: false
            },
            no_boxes: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            queen_YN: {
                type: Sequelize.CHAR(1),
                allowNull: false,
            },
            queen_alarm_YN: {
                type: Sequelize.CHAR(1),
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });

        await queryInterface.createTable('queen', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            apiary_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'user',
                    key: 'id'
                },
                onDelete: 'CASCADE',
            },
            gondola_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'gondola',
                    key: 'id'
                },
                onDelete: 'CASCADE',
            },
            colony_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'colony',
                    key: 'id'
                },
                onDelete: 'CASCADE',
            },
            color_plate: {
                type: Sequelize.STRING,
                allowNull: false
            },
            queen_number: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            queen_id: {
                type: Sequelize.BIGINT,
                allowNull: false
            },
            clipped_YN: {
                type: Sequelize.CHAR(1),
                allowNull: false,
            },
            mating_status: {
                type: Sequelize.CHAR(1),
                allowNull: false,
            },
            marked_YN: {
                type: Sequelize.CHAR(1),
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });


    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropAllTables();
    }
};