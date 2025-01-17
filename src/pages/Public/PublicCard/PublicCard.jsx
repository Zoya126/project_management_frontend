import PropTypes from 'prop-types';
import { Text, Badge,Tooltip } from '../../../components/ui';
import styles from './PublicCard.module.css';
// import Tooltip from '../../../components/ui/Tooltip/Tooltip'

export default function Card({ task }) {
  const dones = task.checklists.filter((list) => list.checked);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Text
          style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}
          step={1}
          color="#767575"
          weight="500"
        >
          <span className={styles[task.priority]}>•</span>{' '}
          {task.priority.toUpperCase()} PRIORITY
        </Text>

        
          <div className={styles.assignee}>
            
            <Tooltip tooltipText={task.assignee}>
              <Text step={4}>{task.assignee.substring(0, 2)}</Text>
            </Tooltip>

          </div>
       
      </div>
      
        
      <div className={styles['card-title-container']}>
          <Text step={7} weight="500" className={styles['text-truncate']}>
            {task.title}
          </Text>
          <div className={styles.tooltip}>{task.title}</div>
      </div>
      
      <div className={styles.checklists}>
        <Text weight="500">
          Checklists ({dones.length + '/' + task.checklists.length})
        </Text>

        <div className={styles.lists}>
          {task.checklists.map((list) => (
            <div key={list.id} className={styles.list}>
              <div className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  name=""
                  id={`checkbox-${list.id}`}
                  checked={list.checked}
                />
              </div>
              
              <Text>{list.title}</Text>
            </div>
          ))}
        </div>
      </div>

       {task.dueDate && (
        <div className={styles.dueDate}>
          <Text weight="500">Due Date</Text>
          <Badge
            variant="default"
            className={
              task.priority === 'high' || task.status === 'backlog'
                ? styles.redBackground: ''
                
            }
          >
            {new Date(task.dueDate).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
            })}
          </Badge>
        </div>
      )}
    </div>
  );
}

Card.propTypes = {
  task: PropTypes.object,
};

